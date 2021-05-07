import { Box, Heading, Kbd } from "@chakra-ui/layout";
import { useEffect, useState } from "react";

// Ambient TypeScript import only
import type { HelloResponseType } from "./api/hello";

export default function Home() {
  const [data, setData] = useState<HelloResponseType | null>(null);
  const [error, setError] = useState<Error | null>(null);

  useEffect(() => {
    void fetch("/api/hello")
      .then(async (res) => {
        const json = await res.json();
        if (res.status >= 400) throw new Error(json.message);
        return json;
      })
      .then(setData)
      .catch(setError);
  }, []);

  return (
    <Box textAlign="center" paddingTop={5}>
      <Heading>Hello World</Heading>
      {error ? (
        <p>
          The API endpoint threw an error! <Kbd>{error.message}</Kbd>
        </p>
      ) : (
        <p>
          Time according to <Kbd>/api/hello</Kbd>: {data ? data.time : "Loading..."}
        </p>
      )}
    </Box>
  );
}
