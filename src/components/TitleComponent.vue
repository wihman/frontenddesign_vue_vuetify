<template>
    <v-col cols="12">
        <img src="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAACAAAAAgCAYAAABzenr0AAAABmJLR0QA/wD/AP+gvaeTAAACMElEQVRYhe2Uv2tTURiGny83SXEoRWoNamoCtVJFm3YUOqh/gLqINbGLQ0HcHAxmbUpXJ0EXBxtbcdBFF0EFDYKC2qFgqaKYgg1XS6RQm/sjx0FSe1uTE4lpCvZd7r3vOd/3Ppxz7oEmS9Y5k5NdhuvGAOMfZ7muYUwxOPihIoAxPnEe1I0GhJfloBh2h+I3y4bPO67SDQwH8COMrDbWALCrgeFl7akGsOHaAvDrJgzs7ODC/m4Ars3MkjVNxLbYNv0McYqVC8VHMdqL0767PoB4NMqZSASAgmWTNU2M73laPk/rSlGBlvoBUm+nePRlHoDH87+eTnuYxSOn8NlW5XARnB1hLaQWoGBZ3MvlvKYITsdebfNatPkP4fZgkKOhEABP8nkKlgVK4f+aq2ELOlGBYH0Ao30xhrv3AXB99j0XX77C/22O1hf3daUUo4dZ6j1WH0Dm4yfagoGVdwC3LUQxcgixlysXig8r3KOF1AJkTZOsaXo8FQiyFDuubV6Lmn4Imw6g3YJLB3oY6+8DIPn6DVffzWAsLtD6/C5iV7uKhR8HB1ju6q/aX7sC6k/vsnakMoR2yuoPY/x2DV3rl3suvpLb9DOwBbDpAJwNyLSrATxteLx4MzwXkVtyEobPnwY6EXVHQUiUjPH7dy0pkSRKBQRGPT5cBoLrfJGkKBZAnUaYcwP+lJdHI+PWxAlEpYASotJuIvEQwMhkTqLkSgU/BVJCkXaHzj74mwX6//QTqZi3eBuX+QcAAAAASUVORK5CYII=">
        <h1>{{ titles }}</h1>
        <p>{{ descriptions }}</p>
    </v-col>
</template>
<script>
    export default {
        name: 'TitleComponent',
        props: {
            title: {
                type: String,
                default: 'Transaction'
            },
            description: {
                type: String,
                default: 'You can manage all transaction on this feature'
            }
        },
        data() {
            return {
                titles: this.title,
                descriptions: this.description
            }
        }
    }
</script>