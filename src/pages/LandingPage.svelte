<script>
  import { MoveRight } from "lucide-svelte";
import { navigate } from "svelte-routing";
  function goToLoginPage() {
    navigate('/login');
  }
</script>


<div class="relative backgrop-blur-none h-screen flex flex-col justify-around items-center 
 custom-bg-image bg-center bg-no-repeat rounded-lg ">
    
    <div class="backdrop-blur-none flex flex-col relative justify-between items-center gap-[10px]">
            <img src="./chefImage.png" class='bg-cover font-bold' width='79' height='79' alt='chef'>
            <div class='font-bold text-lg text-white'>100K+ Premium Recipe</div>
    </div>

    <div class='flex flex-col  justify-between items-center gap-[50px]'>
        <div class='flex flex-col backdrop-blur-none items-center justify-between gap-[30px]'>
            <div class='flex flex-col gap-3 items-center justify-between'>
                <h1 class='font-bold text-5xl text-center text-white'>
                    Get 
                </h1>
                <h1 class='font-bold text-5xl text-center text-white'>
                    Cooking
                </h1>
            </div>
            <div>
                <h2 class='font-normal text-md text-white '>
                    Simple way to find Tasty Recipe
                </h2>
            </div>
        </div>
        
            <button class='flex btn  items-center justify-center gap-3 backdrop-blur-none px-[50px] py-[15px] text-md rounded-xl font-semibold
                            text-white '
                           on:click={goToLoginPage}>
                           Start Cooking
                           <div class=''>
                           <MoveRight/>

                           </div>
            </button>
    </div>
</div>

<style>
    .custom-bg-image{
        background-image: url('./landingPageBg.jpg');
    }
   
.custom-bg-image:before {
            content: " ";
            position: absolute;
            top: 0;
            right: 0;
            bottom: 0;
            left: 0;
            background: linear-gradient(to bottom,rgba(0, 0, 0, 0.4), rgba(0, 0, 0, 1));
}


.btn{
        background-color: rgba(18, 149, 117, 1);
    }

</style>



