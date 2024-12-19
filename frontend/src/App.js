import "./App.css";

function App() {
  return (
    <div class="">
      {/* <h1 class="text-3xl font-bold underline">Hello world!</h1> */}
      <div class="h-screen flex items-center my-auto px-4 mx-auto">
        <div class="max-w-lg mx-auto">
          <div class="text-center mb-6">
            <h2 class="text-3xl md:text-4xl font-extrabold">Sign in</h2>
          </div>
          <form class="" action="">
            <div class="mb-6">
              <label class="block mb-2 font-extrabold" for="">
                Email
              </label>
              <input class="inline-block w-full p-4 leading-6 text-lg font-extrabold placeholder-primary3 bg-white shadow border-2 border-primary3 rounded" type="email" placeholder="email"/>
            </div>
            <div class="mb-6">
              <label class="block mb-2 font-extrabold" for="">
                Password
              </label>
              <input class="inline-block w-full p-4 leading-6 text-lg font-extrabold placeholder-primary3 bg-white shadow border-2 border-primary3 rounded" type="password" placeholder="**********"/>
            </div>
            {/* <div class="flex flex-wrap -mx-4 mb-6 items-center justify-between">
              <div class="w-full lg:w-auto px-4 mb-4 lg:mb-0">
                <label for="">
                  <input type="checkbox"/>
                  <span class="ml-1 font-extrabold">Remember me</span>
                </label>
              </div>
              <div class="w-full lg:w-auto px-4">
                <a class="inline-block font-extrabold hover:underline" href="#">
                  Forgot your password?
                </a>
              </div>
            </div> */}
            <button class="inline-block w-full py-4 px-6 mb-6 text-center text-lg leading-6 text-white font-extrabold bg-primary1 hover:bg-primary3 border-3 border-primary3 shadow rounded transition duration-200">
              Sign in
            </button>
            {/* <p class="text-center font-extrabold">
              Don&rsquo;t have an account?{" "}
              <a class="text-red-500 hover:underline" href="#">
                Sign up
              </a>
            </p> */}
          </form>
        </div>
      </div>
    </div>
  );
}

export default App;
