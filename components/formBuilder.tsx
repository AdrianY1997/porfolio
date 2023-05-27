type FormBuilderProps = {
  data: Array<{
    type: string;
    label: string;
  }>;
};
export const FormBuilder = (props: FormBuilderProps) => {
  return (
    <form>
      {props.data.map((e) => (
        <div className={e.type == "text" ? "bg-gray-500" : "bg-slate-500"}>
          <input type={e.type} />
          <label>{e.label}</label>
        </div>
      ))}
    </form>
  );
};
