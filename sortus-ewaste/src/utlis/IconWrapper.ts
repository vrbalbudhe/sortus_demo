export function wrapIcon<T>(Icon: T) {
  return Icon as unknown as React.FC<React.SVGProps<SVGSVGElement>>;
}
