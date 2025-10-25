<script setup lang="ts">
import { getProjectByName, useProjectStore } from "@/entities/project";
import SmallButton from "@/shared/ui/SmallButton/SmallButton.vue";
import { useRoute, useRouter } from "vue-router";

const route = useRoute();
const router = useRouter();

const projectStore = useProjectStore();

const moveToIssues = () => {
    const newCurrentProject = getProjectByName(route.params.name);
    if (!newCurrentProject) return;
    projectStore.setCurrentProject(newCurrentProject);
    router.push("/issues");
};
</script>

<template>
    <div class="flex flex-col">
        <h2 class="mt-10 font-bold text-2xl">Configure SDK</h2>
        <p class="text-sm my-4">
            Initialize Sentry as early as possible in your application's
            lifecycle, usually your Vue app's entry point (
            <span class="text-red-600">main.ts/js</span>
            ).
        </p>

        <div class="bg-gray-800 text-white px-5 py-3 rounded-md">
            <div class="mb-2 font-semibold text-secondary">
                <span>JavaScript</span>
            </div>
            <code>
                <span class="text-red-600">import</span> { createApp }
                <span class="text-red-600">from</span> "vue";<br />
                <span class="text-red-600">import</span> { createRouter }
                <span class="text-red-600">from</span> "vue-router";<br />
                <span class="text-red-600">import</span> router
                <span class="text-red-600">from</span> "./router";<br /><br />
                <span class="text-red-600">import</span> { initErrorHandlers }
                <span class="text-red-600">from</span>
                "sentry-clone-sdk";<br /><br />
                const app = <span class="text-blue-400">createApp</span>({
                <span class="text-secondary">// ...</span> });<br /><br />
                <span class="text-blue-400">initErrorHandlers</span>({<br />
                app,<br />
                <span class="text-blue-400">id</span>: "{{
                    getProjectByName(route.params.name)?.id || "Unknown name"
                }}",<br />

                });<br /><br />

                app.<span class="text-blue-400">use</span>(router);<br />
                app.<span class="text-blue-400">mount</span>("#app");
            </code>
        </div>

        <SmallButton
            @click="moveToIssues"
            color="purple"
            class="mt-5 max-w-max"
        >
            Move to issues
        </SmallButton>
    </div>
</template>
