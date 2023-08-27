<script>
	import { time } from '../lib/stores';

	const formatter = new Intl.DateTimeFormat(
		'en',
		{
			hour12: true,
			hour: 'numeric',
			minute: '2-digit',
			second: '2-digit'
		}
	);
</script>

<h1 class="text-5xl text-center font-medium text-neutral-200">The time is {formatter.format($time)}</h1>

<style lang="postcss">
:global(html) {
    background-color: theme(colors.neutral.900);

    
}
</style>