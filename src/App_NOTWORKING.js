function App() {
  const [query, setQuery] = useState('');
  const [results, setResults] = useState([]);

  const handleSearch = async () => {
    const response = await fetch(`/api/search?q=${query}`);
    const data = await response.json();
    setResults(data.results);
  };

  return (
    <div>
      <h1>AI Search Dashboard</h1>
      <input value={query} onChange={(e) => setQuery(e.target.value)} />
      <button onClick={handleSearch}>Search</button>
      <ul>
        {results.map((item, i) => (
          <li key={i}>{item.title}</li>
        ))}
      </ul>
    </div>
  );
}

