import { useState, useEffect } from "react";

function useFetch(url) {

  // Mission 2: Create custom hook
  const [data, setData] = useState(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);


  // Mission 3: Create data state
  

  // Mission 4: Create loading and error states


  // Mission 5: Fetch API data using useEffect
  useEffect(() => {
    const fetchData = async () => {
      setLoading(true);
      setError(null);

      try {
        const response = await fetch(url);
        if (!response.ok) {
          throw new Error("Failed to fetch data");
        }
        const result = await response.json();
        setData(result);
      } catch (err) {
        setError(err.message);
      } finally {
        setLoading(false);
      }
    };

    fetchData();
  }, [url]);

  // Mission 6: Return data, loading and error
    return { data, loading, error };

}

export default useFetch;