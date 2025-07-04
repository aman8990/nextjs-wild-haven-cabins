import UserQuery from './UserQuery';

function UserQueries({ queries }) {
  return (
    <div>
      <h1 className="text-center text-3xl text-bold mt-10">User Queries</h1>
      <div className="space-y-10 my-10 text-lg p-2">
        {queries.map((query) => (
          <UserQuery query={query} key={query.id} />
        ))}
      </div>
    </div>
  );
}

export default UserQueries;
