# Prompt de contingência para o Lovable

Use este prompt somente se, depois de publicar esta branch e fazer um novo login
Discord, `guild_joined` ou `role_granted` continuar `false`.

---

Audite e corrija o fluxo Discord OAuth do sistema de comentários sem reintroduzir
coleta de e-mail.

Requisitos obrigatórios:

1. Preserve o cliente dedicado de comentários em
   `src/integrations/supabase-comments/client.ts`. Não troque pelo Supabase
   principal do site.
2. O login deve usar:
   - provider: `custom:discord-minimal`;
   - scopes: `identify guilds.join`;
   - redirect para a mesma página de artigo.
3. Nunca adicione o scope `email`, nunca leia `user.email` e nunca envie
   `discord_id` informado pelo navegador como identidade confiável.
4. Após o callback, invoque `discord-post-login` uma vez com:

   ```ts
   { provider_token: session.provider_token }
   ```

5. Só marque a sincronização como concluída quando a resposta tiver:

   ```ts
   { ok: true, joined: true, roleGranted: true }
   ```

6. Se a Edge Function falhar:
   - remova a marca `pending`;
   - permita retry;
   - mostre erro claro ao usuário;
   - não apague a sessão válida do Supabase.
7. Após sucesso, remova `provider_token` e `provider_refresh_token` do registro
   persistido no `localStorage`; mantenha apenas os tokens Supabase necessários
   para a sessão.
8. Não altere RLS. Comentários continuam usando `auth.uid() = user_id`.
9. Não consulte banco diretamente nos componentes React.
10. Não exponha Bot Token, service-role key, access token, refresh token ou
    provider token em logs, erros, analytics ou UI.

Valide no ambiente publicado:

- o consentimento do Discord mostra somente acesso ao perfil básico e entrada
  no servidor, sem e-mail;
- o callback retorna à página original;
- `public.discord_profiles.guild_joined = true`;
- `public.discord_profiles.role_granted = true`;
- o usuário aparece no servidor;
- o cargo Leitor dos Artigos foi atribuído;
- criar, responder, editar e excluir comentário continuam funcionando;
- logout e novo login funcionam;
- nenhuma resposta ao frontend contém e-mail;
- nenhuma chamada usa o provider nativo `discord`.

Se `discord_join_failed` ocorrer, verifique o secret `DISCORD_BOT_TOKEN`, o
`DISCORD_GUILD_ID` e se o token OAuth recebido inclui `guilds.join`.

Se `discord_role_failed` ocorrer, verifique `DISCORD_READER_ROLE_ID`, a
permissão Manage Roles e se o cargo do bot está acima do cargo Leitor na
hierarquia do servidor.

Não altere IDs nem secrets sem confirmação do proprietário. Entregue um resumo
dos arquivos modificados e evidências dos testes, sem revelar valores secretos.
