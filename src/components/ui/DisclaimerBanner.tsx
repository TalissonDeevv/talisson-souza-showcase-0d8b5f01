import { AlertTriangle } from 'lucide-react';
import { Link } from 'react-router-dom';
import { useTheme } from '@/contexts/ThemeContext';
import { getText } from '@/utils/translations';

const DisclaimerBanner = () => {
  const { language } = useTheme();
  const disclaimerPath = language === 'en' ? '/en-us/policies/disclaimer' : '/politicas/disclaimer';

  return (
    <div className="my-10 p-6 rounded-xl border-2 border-yellow-500/40 bg-yellow-500/5 backdrop-blur-sm relative overflow-hidden">
      <div className="absolute top-0 left-0 w-1 h-full bg-yellow-500" />
      <div className="flex items-start gap-4">
        <div className="shrink-0 mt-0.5">
          <AlertTriangle className="w-6 h-6 text-yellow-500" />
        </div>
        <div>
          <h3 className="text-sm font-bold uppercase tracking-wider text-yellow-500 mb-2">
            Disclaimer
          </h3>
          <p className="text-sm text-muted-foreground leading-relaxed">
            {getText(language,
              'Este artigo expressa opiniões pessoais e tem caráter exclusivamente informativo e educacional. O conteúdo aqui apresentado não constitui assessoria jurídica, consultoria profissional ou recomendação de qualquer natureza. As opiniões são do autor e não representam posicionamento institucional.',
              'This article expresses personal opinions and is exclusively informational and educational. The content presented here does not constitute legal advice, professional consulting, or recommendations of any kind. The opinions are those of the author and do not represent institutional positioning.'
            )}
          </p>
          <Link
            to={disclaimerPath}
            className="inline-flex items-center gap-1 mt-3 text-xs font-medium text-yellow-500 hover:text-yellow-400 transition-colors uppercase tracking-wider"
          >
            {getText(language, 'Ler disclaimer completo →', 'Read full disclaimer →')}
          </Link>
        </div>
      </div>
    </div>
  );
};

export default DisclaimerBanner;
