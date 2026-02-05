export default function Header() {
  return (
    <header class="bg-blue-800">
  <div class="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
    <div class="flex h-16 items-center justify-between">
      <div class="flex-1 md:flex md:items-center md:gap-12">
        <a class="block text-teal-600" href="#">
          <div className="brand">
            <span class="text-xl font-bold text-gray-900 hidden md:block"><i></i>Oasis</span>
          </div>
        </a>
      </div>

      <div class="md:flex md:items-center md:gap-12">
        <nav aria-label="Global" class="hidden md:block">
          <ul class="flex items-center gap-6 text-sm">
            <li>
              <a class="text-gray-900 transition hover:text-gray-500/75" href="#"> About </a>
            </li>

            <li>
              <a class="text-gray-900 transition hover:text-gray-500/75" href="#"> Careers </a>
            </li>

            <li>
              <a class="text-gray-900 transition hover:text-gray-500/75" href="#"> History </a>
            </li>

            <li>
              <a class="text-gray-900 transition hover:text-gray-500/75" href="#"> Services </a>
            </li>

            <li>
              <a class="text-gray-900 transition hover:text-gray-500/75" href="#"> Projects </a>
            </li>

            <li>
              <a class="text-gray-900 transition hover:text-gray-500/75" href="#"> Blog </a>
            </li>
          </ul>
        </nav>

        <div class="flex items-center gap-4">
          {/*Shopping Cart Svg*/}
          <div>
            <a class="text-gray-900 transition hover:text-gray-500/75" href="#">
              <svg xmlns="http://www.w3.org/2000/svg" class="size-5" fill="none" viewBox="0 0 24 24" stroke="currentColor" stroke-width="2">
                <path stroke-linecap="round" stroke-linejoin="round" d="M3 3h2l.4 2M7 13h10l4-8H5.4M7 13L5.4 5M7 13l-2.293 2.293c-.63.63-.184 1.707.707 1.707H17m0 0a2 2 0 100 4 2 2 0 000-4zm-8 2a2 2 0 11-4 0 2 2 0 014 0z"></path> 
              </svg>
            </a>
          </div>

          <div class="sm:flex sm:gap-4">
            <a class="rounded-md bg-gray-100 px-5 py-2.5 text-sm font-medium text-gray-900 shadow-sm" href="#">
              Login
            </a>
          </div>

          <div class="block md:hidden">
            <button class="rounded-sm bg-gray-100 p-2 text-gray-600 transition hover:text-gray-600/75">
              <svg xmlns="http://www.w3.org/2000/svg" class="size-5" fill="none" viewBox="0 0 24 24" stroke="currentColor" stroke-width="2">
                <path stroke-linecap="round" stroke-linejoin="round" d="M4 6h16M4 12h16M4 18h16"></path>
              </svg>
            </button>
          </div>
        </div>
      </div>
    </div>
  </div>
</header>
  
  );
}
