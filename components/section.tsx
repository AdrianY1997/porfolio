type SectionProps = {
  children: React.ReactNode;
  removeTop?: boolean;
};

export const Section = (props: SectionProps) => {
  return (
    <div className={props.removeTop ? "pb-10" : "py-10"}>{props.children}</div>
  );
};
