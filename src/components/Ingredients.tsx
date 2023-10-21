type oneIngredient = {
  info: string;
};

const Ingredient = ({ info }: oneIngredient) => {
  return (
    <div className="w-1/3">
      <li>{info}</li>
    </div>
  );
};

export default Ingredient;
