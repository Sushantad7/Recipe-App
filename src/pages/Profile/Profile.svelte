
<script>
    let followers=1200
    let following=300
    let toggleFollow=false

    function goBack(){
        history.back()
    }
  
</script>


<div class='flex flex-col gap-[20px] bg-white h-screen rounded-lg'>
    <button class=' w-[20px] h-[20px] mr-auto ml-5 mt-3'
        on:click={goBack}>
        <img src='./backArrow.jpg' alt='backArrow'>
        </button>
   
    <div class='flex justify-between  ml-5 mr-3 mx-auto '>
        
        <div class='flex gap-[11px]'>
            <div class=''>
                <img src='./profileChef.png' class='w-[45px] h-[45px] rounded-full border' alt='user'>
            </div>
            <div>
                <h1 class='font-bold '>Main Chef </h1>
                <div class='flex items-center mr-auto'>
                    <img src='./location.jpg' class='w-[17px] h-[17px]' alt='location' >
                    <h2 class='text-gray-400'>Paris, France</h2>
                </div>
            </div>
            </div>
            
            {#if !toggleFollow}
                        <button class='follow-button rounded-lg p-2 w-[117px]  ml-auto  my-auto  text-white'
                                on:click={()=>{
                                    followers=followers+1
                                    toggleFollow=!toggleFollow
                                }}>
                                    Follow
                        </button>
            {:else}
                        <button class='following-button rounded-lg p-2 w-[117px]  ml-auto mb-1 '
                                on:click={()=>{
                                    followers=followers-1
                                    toggleFollow=!toggleFollow
                                }}>
                                Following
                        </button>
            {/if}
    </div>
    <div class='flex gap-[20px] mr-auto ml-5 mt-9'>
        <div class='flex flex-col ml-5'>
            <h1>Followers</h1>
            <h2 class='font-bold text-2xl '>{followers}</h2>
        </div>

        <div class='flex flex-col ml-5'>
            <h1>Following</h1>
            <h2 class='font-bold text-2xl'>{following}</h2>
        </div>

        <div class='flex flex-col ml-5 '>
            <h1>Recipe</h1>
            <h2 class='font-bold text-2xl'>{following}</h2>
        </div>
    </div>
    

</div>
<style>
    .follow-button{
      background-color: rgba(18, 149, 117, 1) ;
        
    }

    .following-button{
        background-color: burlywood;
    }
</style>