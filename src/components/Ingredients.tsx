type oneIngredient = {
  info: string;
};

export default function Ingredient({ info }: oneIngredient) {
  return (
    <div className="w-1/3">
      <li>{info}</li>
    </div>
  );
}
