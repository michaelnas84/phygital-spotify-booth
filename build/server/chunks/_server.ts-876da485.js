import { j as json } from './index-2b68e648.js';
import { Client } from 'spotify-api.js';

async function GET() {
  const client = await Client.create({ token: { clientID: "950284da86ab4260911293a634db6c44", clientSecret: "0038a2985d1c45b6bd3c91a495e15409" } });
  const token = client.token;
  return json({ token });
}

export { GET };
//# sourceMappingURL=_server.ts-876da485.js.map
