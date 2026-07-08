# Changelog

## Sprint 2

- Preparada a infraestrutura Supabase para Development, Preview, Staging e Production.
- Adicionados `verify_jwt` explicitos nos `config.toml` dos projetos Principal e Comentarios.
- Criada migration `20260708151015_explicit_data_api_grants.sql` no projeto Principal.
- Criada migration `20260708151221_optimize_rls_policy_evaluation.sql` no projeto Comentarios.
- Criado auditor Supabase automatico para migrations, Edge Functions, RLS, policies, Storage, Realtime e secrets.
- Criado helper de workdir temporario para uso seguro do Supabase CLI com layout multi-projeto.
- Criada documentacao de deployment Supabase, checklist de Staging e disaster recovery.
- Documentadas pendencias remotas: replay real, Advisors no projeto Principal, publicacao de Functions em Staging e configuracao de secrets.

## Sprint 1

- Reorganizada a arquitetura do repositorio para separar Supabase Principal e Supabase Comentarios.
- Movidas migrations para diretorios por projeto.
- Movidas Edge Functions para diretorios por projeto.
- Isoladas migrations historicas mistas em `supabase/legacy-mixed`.
- Removido fallback hardcoded de producao no cliente de comentarios.
- Adicionada validacao obrigatoria de variaveis Supabase no frontend.
- Criado auditor arquitetural para imports, referencias e env vars.
- Atualizada documentacao base da arquitetura Supabase.
