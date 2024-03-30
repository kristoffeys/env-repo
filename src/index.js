import { parse, stringify } from 'envfile';
import fs from 'fs/promises';
import promptly from 'promptly';

export default async function envWizard(sourceEnv, targetEnv) {
    try {
        const data = await fs.readFile(sourceEnv, 'utf8');
        const env = parse(data);
        const result = await fillViaWizard(env);
        await fs.writeFile(targetEnv, stringify(result));
    } catch (err) {
        console.error(err);
    }
}


export async function fillViaWizard(env) {
    const result = {};
    for (const key in env) {
        result[key] = env[key] || await promptly.prompt(`${key}: `);
    }
    return result;
}
