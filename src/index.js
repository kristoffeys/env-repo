import { parse, stringify } from 'envfile';
import fs from 'fs';
import promptly from 'promptly';

export default function envWizard(sourceEnv, targetEnv) {
    fs.readFile(sourceEnv, 'utf8', (err, data) => {
        if (err) {
            console.error(err);
            return;
        }

        const env = parse(data);
        fillViaWizard(env).then((result) => {
            fs.writeFile(targetEnv, stringify(result), (err) => {
                if (err) {
                    console.error(err);
                    return;
                }
                console.log('The file has been saved!');
            });
        });
    });
}


async function fillViaWizard(env) {
    const result = {};
    for (const key in env) {
        const value = env[key];
        if (!value) {
            const newValue = await promptly.prompt(`${key}: `);
            result[key] = newValue;
        } else {
            result[key] = value;
        }
    }
    return result;
}
