<script lang="ts">
	import { Amplify } from 'aws-amplify';
	import { Authenticator, authStore } from '@aws-amplify/ui-svelte';
	import awsConfig from '@notes/aws-exports';
	import '@aws-amplify/ui-svelte/styles.css';

  Amplify.configure(awsConfig);
  
	const { signOut, user } = authStore;
</script>

<Authenticator>
	<h1>Hello {$user.username}!</h1>
	<button on:click={signOut}>Sign Out</button>
</Authenticator>