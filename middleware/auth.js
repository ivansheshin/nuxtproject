export default function({ store, redirect }) {
  console.log(store.state);
  const q = 1;
  if (q) return redirect('/')
}