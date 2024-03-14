

const defaultItems = ['abi', 'kowsi', 'harsha'];

export function SaveHistory() {
  return (
    <>
      <div>
        hello from the component
        {defaultItems.map((item, index) => (
          <div key={index}>{item}</div>
        ))}
      </div>
    </>
  );
}
