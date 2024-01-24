import { useRouter } from 'next/router';
import { useTranslation } from 'react-i18next';
import Link from 'next/link';

const NotFound = () => {
  const { t } = useTranslation();
  const router = useRouter();
  const { message } = router.query;
  return (
    <div>
      <h1>{message}</h1>
      <Link href='/'>{t('go home')}</Link>
    </div>
  );
};

export default NotFound;
