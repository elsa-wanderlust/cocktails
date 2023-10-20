type oneIngredient = {
  info: string;
};

const Ingredient = ({ info }: oneIngredient) => {
  return (
    <div>
      <p>{info}</p>
    </div>
  );
};

export default Ingredient;
