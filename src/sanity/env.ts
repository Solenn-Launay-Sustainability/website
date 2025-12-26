import { env } from "~/env";

const apiVersion = env.NEXT_PUBLIC_SANITY_API_VERSION;

const dataset = env.NEXT_PUBLIC_SANITY_DATASET;

const projectId = env.NEXT_PUBLIC_SANITY_PROJECT_ID;

export { apiVersion, dataset, projectId };
