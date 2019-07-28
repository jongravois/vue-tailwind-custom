<template>
    <div class="w-full text-center text-blue-500"
         style="font-size: 2rem;">
        <p class="pt-12">
            This could take some time!
        </p>
        <p class="flex justify-center py-12">
            <atom-spinner
                    :animation-duration="1500"
                    :size="90"
                    color="#2995b8">
            </atom-spinner>
        </p>
        <p>
            {{sayings[randie]}}
        </p>
    </div>
</template>

<script type="text/babel">
    import { AtomSpinner, FingerprintSpinner } from 'epic-spinners';

    export default {
        name: 'LoaderBlock',
        data() {
            return {
                randie: 0,
                sayings: [
                    "While we wait, how about a game of chess?",
                    "If you are going for coffee, I'd like one as well.",
                    "You know, when I was a kid my parents moved a lot, but I always found them.",
                    "Do you think a book about failures that doesn't sell would be a success?",
                    "What do people do with all the extra time they save by writing ‘k’ instead of ‘ok’?",
                    "If we’re not meant to have midnight snacks, why is there a light in the fridge?",
                    "Weather forecast for tonight: dark.",
                    "Twelve men walked into a bar ... they had to wait too.",
                    "While we wait, do you want to share a Snickers?",
                    "I'm gonna calculate pi to the last digit ... what about you?",
                    "Doing nothing is hard; you never know when you are done.",
                    "I think the worst time to have a heart attack is during a game of charades.",
                    "Doesn't expecting the unexpected make the unexpected expected?",
                    "If you think nobody cares if you're alive, try missing a couple of bank payments.",
                    "Don't tell me the sky is the limit when there are footprints on the moon.",
                    "Sometimes I wake up grumpy; other times I let her sleep.",
                    "Don't you wish they made a clap on clap off device for some peoples mouths?",
                    "Everyday is a gift, that\'s why they call it the present.",
                    "The best way to get back on your feet ... miss a car payment.",
                    "Shoes are required to eat in the cafeteria. \n(Socks can eat any place they want.)"
                ]
            };
        },
        components: {
            AtomSpinner,
            FingerprintSpinner
        },
        created() {},
        props: [],
        computed: {},
        methods: {},
        mounted() {
            this.randie = Math.floor(Math.random() * 22);
        }
    };
</script>

<style scoped></style>
