<script>
 
  let checked = false;

  function getClassNames(theme) {
    return theme === "light" ? "mr-auto bg-white" : "ml-auto bg-black";
  }

  function changeTheme() {
    console.log(checked);
  }

  let social_data = [
    {
      name: "facebook",
      logo: "/icon-facebook.svg",
      user_name: "@moncefSell",
      followers: 3000,
      increase: 25,
    },
    {
      name: "twitter",
      logo: "/icon-twitter.svg",
      user_name: "@x_moncif_selloum_x",
      followers: 300,
      increase: 4,
    },
    {
      name: "instagram",
      logo: "/icon-instagram.svg",
      user_name: "@moncefSell",
      followers: 300050,
      increase: 25,
    },
    {
      name: "youtube",
      logo: "/icon-youtube.svg",
      user_name: "@moncefSell",
      followers: 3000,
      increase: -19,
    },
  ];
  let overview = [
    {
      name: "page views",
      logo: "/icon-facebook.svg",
      number: 87000,
      increase: 3,
    },
    {
      name: "page views",
      logo: "/icon-facebook.svg",
      number: 87,
      increase: 3,
    },
    {
      name: "page views",
      logo: "/icon-instagram.svg",
      number: 87,
      increase: 3,
    },
    {
      name: "page views",
      logo: "/icon-instagram.svg",
      number: 87,
      increase: 3,
    },
    {
      name: "page views",
      logo: "/icon-twitter.svg",
      number: 87,
      increase: -3,
    },
    {
      name: "page views",
      logo: "/icon-twitter.svg",
      number: 87,
      increase: 3,
    },
    {
      name: "page views",
      logo: "/icon-youtube.svg",
      number: 87,
      increase: 3,
    },
    {
      name: "page views",
      logo: "/icon-youtube.svg",
      number: 87,
      increase: 3,
    },
  ];

  function getBorderClass(name) {
    switch (name) {
      case 'youtube':
        return 'youtube-border';
      case 'facebook':
        return 'facebook-border';
      case 'twitter':
        return 'twitter-border';
      case 'instagram':
        return 'instagram-border';
      default:
        return '';
    }
  }

  function formatNumberShort(number) {
    if (number >= 1000000) {
        return (number / 1000000).toFixed(1) + 'M';
    } else if (number >= 1000) {
        return (number / 1000).toFixed(1) + 'k';
    } else {
        return number.toString();
    }
}
let sum = 0
for(let i = 0; i<social_data.length; i++){
    sum += social_data[i].followers
}
let totalFollowers = sum;
</script>

<div
class:bg-[#1D2029]={checked}
class="mx-auto">
  <div class:bg-[#20222F]={checked} class="absolute -z-10 h-[250px] w-full bg-top_bg_pattern"></div>
  <div class:bg-[#20222F]={checked} class="bg-top_bg_pattern">
    <div
      class="flex justify-between w-[80%] mx-auto py-6 max-sm:flex-col max-sm:gap-4"
    >
      <div class="">
        <h1 class:text-white={checked} class="text-3xl font-semibold max-sm:text-2xl">
          Social Media Dashboard
        </h1>
        <p class="text-250 font-bold text-text_color">
          Total Followers : {totalFollowers}
        </p>
      </div>
      <hr class="sm:hidden text-black" />
      <div class="flex items-center gap-2 max-sm:justify-between">
        <!-- button componenet -->
         <span class:text-white={checked} class="font-bold text-[#8F96AB] text-300">Dark Mode</span>
        <input type="checkbox" id="darkmode-toggle" bind:checked={checked} on:click={changeTheme}/>
        <label for="darkmode-toggle"> </label>
      </div>
    </div>
  </div>
  <div
    class="social grid grid-cols-4 gap-6 w-[80%] mx-auto my-6 max-lg:grid-cols-2 max-sm:grid-cols-1"
  >
    {#each social_data as data}
      <div class:card_checked={checked} class="card border p-6 rounded-lg {getBorderClass(data.name)}">
        <div class="flex justify-center items-center gap-2">
          <img src={data.logo} alt="nothing" class="w-5" />
          <p class="text-250 font-bold text-text_color">{data.user_name}</p>
        </div>
        <div class="data flex flex-col items-center justify-center">
          <h1 class="text-6xl font-bold text-text_color_alt mt-4">
            {formatNumberShort(data.followers)}
          </h1>
          <!-- youtube subscribers -->
          <div class="my-2 mb-4">
            {#if data.name == "youtube"}
              <h2 class="text-xl text-text_color tracking-widest">
                SUBSCRIBERS
              </h2>
            {:else}
              <h4 class="text-xl text-text_color tracking-widest">FOLLOWERS</h4>
            {/if}
          </div>
          <div class="font-bold mt-2">
            {#if data.increase > 0}
              <div class="flex justify-center items-center gap-1">
                <img src="/icon-up.svg" alt="" class="h-1" />
                <p class="text-green-500">{data.increase} Today</p>
              </div>
            {:else}
              <div class="flex justify-center items-center gap-1">
                <img src="/icon-down.svg" alt="" class="h-1" />
                <p class="text-red-600">{-data.increase} Today</p>
              </div>
            {/if}
          </div>
        </div>
      </div>
    {/each}
  </div>
  <p class:text-white={checked} class="pl-[10%] text-2xl font-semibold text-text_color my-4">
    Overview - Today
  </p>
  <div
    class="overview grid grid-cols-4 gap-4 w-[80%] mx-auto max-lg:grid-cols-2 max-sm:grid-cols-1"
  >
    {#each overview as view}
      <div class:card_checked={checked} class="card border p-4 rounded-lg">
        <div class="flex justify-between">
          <p class="text-text_color text-350 font-semibold">{view.name}</p>
          <img src={view.logo} alt="" class="w-6 h-6" />
        </div>
        <div class="flex justify-between items-center m-4 mb-0">
          <h1 class="text-500 text-text_color_alt font-semibold">
            {formatNumberShort(view.number)}
          </h1>
          <div class="flex items-center gap-1">
            <img
              src={view.increase > 0 ? "/icon-up.svg" : "/icon-down.svg"}
              alt=""
            />
            <p class:text-red-600={view.increase < 0} class="text-green-500">
              {view.increase}%
            </p>
          </div>
        </div>
      </div>
    {/each}
  </div>
</div>

<style>
  .card {
    background-color: #F0F3FA;
    cursor: pointer;
    border: none;
  }
  .card:hover{
    background-color: #DEE0ED;
  }
  .card_checked{
    background-color: #252B43;
  }
  .card_checked div h1{
    color:white
  }

  label {
    width: 55px;
    height: 25px;
    position: relative;
    display: block;
    background: #ebebeb;
    border-radius: 200px;
    box-shadow:
      inset 0px 5px 15px rgba(0, 0, 0, 0.4),
      inset 0px -5px 15px rgba(255, 255, 255, 0.4);
    cursor: pointer;
  }
  label:after {
    content: "";
    width: 20px;
    height: 20px;
    position: absolute;
    top: 3px;
    left: 3px;
    background: white;
    border-radius: 180px;
    box-shadow: 0px 5px 10px rgba(0, 0, 0, 0.2);
  }
  input {
    width: 0;
    height: 0;
    visibility: hidden;
  }
  input:checked + label {
    background: #242424;
  }
  input:checked + label:after {
    left: 52px;
    transform: translateX(-100%);
    background: linear-gradient(180deg, #5391e0, #53e09e);
  }
  label,
  label:after {
    transition: 0.3s;
  }
  .youtube-border {
    border-top: 4px solid #e63227; /* Red */
  }
  .facebook-border {
    border-top: 4px solid #3b5998; /* Blue */
  }
  .twitter-border {
    border-top: 4px solid #1da1f2; /* Blue */
  }
  .instagram-border {
    border-top: 4px solid #e85e85; /* Pink */
  }
</style>
