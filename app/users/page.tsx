export default async function UsersPage() {
  // 1. Fetch the data from the server
  const response = await fetch("https://jsonplaceholder.typicode.com/users");
  const users = await response.json();

return (
  <div className="min-h-screen bg-gray-50 p-8">
    <div className="max-w-6xl mx-auto">
      <h1 className="text-4xl font-extrabold text-gray-900 mb-8 text-center italic">
        Our Community (Demo)
        <h3>(not real pepole)</h3>
      </h1>
      
      
      {/* יצירת גריד רספונסיבי: 1 בטלפון, 2 בטאבלט, 3 במחשב */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {users.map((user: any) => (
          <div key={user.id} className="bg-white p-6 rounded-2xl shadow-md border border-gray-100 hover:shadow-xl transition-shadow duration-300 group">
            <div className="w-12 h-12 bg-blue-100 text-blue-600 rounded-full flex items-center justify-center mb-4 text-xl font-bold group-hover:bg-blue-600 group-hover:text-white transition-colors">
              {user.name[0]}
            </div>
            <h2 className="text-xl font-bold text-gray-800">{user.name}</h2>
            <p className="text-blue-500 text-sm font-medium mb-4">@{user.username}</p>
            
            <div className="space-y-2 border-t pt-4">
              <p className="text-gray-600 text-sm flex items-center">
                📧 {user.email}
              </p>
              <p className="text-gray-600 text-sm flex items-center">
                📍 {user.address.city}, {user.address.street}
              </p>
            </div>
            
            <button className="w-full mt-6 py-2 bg-gray-900 text-white rounded-lg hover:bg-blue-600 transition-colors">
              View Profile
            </button>
          </div>
        ))}
      </div>
    </div>
  </div>
  );
}
