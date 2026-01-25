interface CanonicalProps {
  url: string;
}

export default function Canonical({ url }: CanonicalProps) {
  return <link rel="canonical" href={url} />;
}
