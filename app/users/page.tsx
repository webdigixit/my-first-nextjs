export default async function UsersPage() {
  // 1. מושכים את הנתונים מהשרת
  const response = await fetch("https://jsonplaceholder.typicode.com/users");
  const users = await response.json();

  return (
    <div className="p-10 max-w-2xl mx-auto">
      <h1 className="text-3xl font-bold mb-6">רשימת משתמשים מהאינטרנט</h1>
      
      <div className="space-y-4">
        {users.map((user: any) => (
          <div key={user.id} className="p-4 border rounded-xl shadow-sm hover:bg-gray-50 transition">
            <h2 className="text-xl font-semibold text-blue-600">{user.name}</h2>
            <p className="text-gray-600">{user.email}</p>
            <p className="text-sm text-gray-400">עיר: {user.address.city}</p>
          </div>
        ))}
      </div>
    </div>
  );
}