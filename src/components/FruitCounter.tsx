export default function FruitCounter({ name, setFruitCount, fruitCount }: { name: string, setFruitCount: Function, fruitCount: number }) {
  return (
    <article>
      <h2>{name}</h2>
      <button type='button' disabled={fruitCount === 0} onClick={() => setFruitCount(fruitCount - 1)}>-</button>
      <p>{fruitCount}</p>
      <button type='button' onClick={() => setFruitCount(fruitCount + 1)}>+</button>
    </article>
  );
}