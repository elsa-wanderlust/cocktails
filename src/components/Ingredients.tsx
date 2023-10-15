type oneIngredient = {
  info: string;
};

const Ingredient = ({ info }: oneIngredient) => {
  // console.log("-----ingredient", info);
  return (
    <div>
      <p>{info}</p>
    </div>
  );
};

export default Ingredient;
