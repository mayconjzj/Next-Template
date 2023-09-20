import * as S from './styles';

export const Link = ({
  children,
  href,
  ...props
}: {
  children: React.ReactNode;
  href: string;
}) => {
  return (
    <S.Link href={href} {...props}>
      {children}
    </S.Link>
  );
};
