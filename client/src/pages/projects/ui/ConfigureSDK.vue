<script setup lang="ts">
import { useRoute } from "vue-router";

const route = useRoute();
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
            <code class="">
                <span class="text-red-600">import</span> { createApp }
                <span class="text-red-600">from</span> "vue";<br />
                <span class="text-red-600">import</span> { createRouter }
                <span class="text-red-600">from</span> "vue-router";<br />
                <span class="text-red-600">import</span> router
                <span class="text-red-600">from</span> "./router";<br /><br />
                <span class="text-red-600">import</span> * as Sentry
                <span class="text-red-600">from</span>
                "@sentry/vue";<br /><br />
                const app = <span class="text-blue-400">createApp</span>({
                <span class="text-secondary">// ...</span> });<br /><br />
                Sentry.<span class="text-blue-400">init</span>({<br />
                app,<br />
                <span class="text-blue-400">dsn</span>: "{{
                    route.params.name
                }}",<br />
                <span class="text-secondary"
                    >// Setting this option to true will send default PII data
                    to Sentry.</span
                >
                <br />
                <span class="text-secondary"
                    >// For example, automatic IP address collection on
                    events</span
                ><br />
                <span class="text-blue-400">sendDefaultPii</span>: true<br />
                });<br /><br />

                app.<span class="text-blue-400">use</span>(router);<br />
                app.<span class="text-blue-400">mount</span>("#app");
            </code>
        </div>
    </div>
</template>
