import useAuth from "./../hooks/useAuth";

export default function Dashboard() {
  const { user } = useAuth();
  return (
    <>
      <h1>Bem-Vindo: {user?.displayName}</h1>
      <img src={user?.photoURL} />
    </>
  );
}
