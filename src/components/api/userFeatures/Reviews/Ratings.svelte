<script>
    export let rating = 0
    let tempRating = rating
   

    function setRating(value) {
        rating = value;
        tempRating = value;
    }
    
    

    function hoverRating(value) {
        tempRating = value;
    }

    function resetHover() {
        tempRating = rating;
    }

    function handleKeyDown(event, value) {
        if (event.key === 'Enter' || event.key === ' ') {
            setRating(value)

        }
    }
</script>

<div role="radiogroup" aria-label="Star Rating">
    {#each [1, 2, 3, 4, 5] as star}
        <button
            class="star {star <= tempRating ? 'filled' : ''}" 
            on:click={() => 
                    {setRating(star)
                     alert(`Thanks for ${star} star rating`)
                    }
            }
            on:mouseover={() => hoverRating(star)}
            on:mouseout={resetHover}
            on:focus={() => hoverRating(star)}
            on:blur={resetHover}
            on:keydown={(event) => handleKeyDown(event, star)}
            aria-label="{star} Star"
            aria-checked="{star === rating}"
            role="radio"
            >

            &#9733
</button>
    {/each}
</div>



<style>
    .star {
        font-size: 2rem;
        cursor: pointer;
        color: #ddd;
    }
    .star.filled {
        color: gold;
    }

</style>