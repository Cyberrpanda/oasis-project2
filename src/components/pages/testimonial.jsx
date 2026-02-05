export default function Testimonial() {
  return (
    <div class="bg-gray-100">
      <div class="mx-auto max-w-7xl py-16 px-4 sm:px-6 lg:px-8">
        <div class="mx-auto max-w-2xl text-center">
          <h2 class="text-3xl font-bold tracking-tight text-gray-900 sm:text-4xl">
            What our customers are saying
          </h2>
          <p class="mt-4 text-lg leading-6 text-gray-600">
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Voluptas
            consequatur, eaque tenetur corporis quisquam.
          </p>
        </div>

        <div class="mt-12">
          <ul role="list" class="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
            <li class="col-span-1 flex flex-col divide-y divide-gray-200 rounded-lg bg-white text-center shadow">
              <div class="flex flex-1 flex-col p-8">
                <img
                  class="mx-auto h-32 w-32 flex-shrink-0 rounded-full"
                  src="https://images.unsplash.com/photo-1502685104226-ee32379fefbe?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=facearea&facepad=4&w=256&h=256&q=80"
                  alt=""
                />
                <h3 class="mt-6 text-sm font-medium text-gray-900">
                  Leslie Alexander
                </h3>
                <dl class="mt-1 flex flex-grow flex-col justify-between">
                  <dt class="sr-only">Title</dt>
                  <dd class="text-sm text-gray-500">Co-Founder / CEO</dd>
                  <dt class="sr-only">Role</dt>
                  <dd class="mt-3">
                    <p class="text-sm italic text-gray-500">
                      “Lorem ipsum dolor sit amet consectetur adipisicing elit.
                      Voluptas consequatur, eaque tenetur corporis quisquam.”
                    </p>
                  </dd>
                </dl>
              </div>
            </li>

            <li class="col-span-1 flex flex-col divide-y divide-gray-200 rounded-lg bg-white text-center shadow">
              <div class="flex flex-1 flex-col p-8">
                <img
                  class="mx-auto h-32 w-32 flex-shrink-0 rounded-full"
                  src="https://images.unsplash.com/photo-1500648767791-00dcc994a43e?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=facearea&facepad=4&w=256&h=256&q=80"
                  alt=""
                />
                <h3 class="mt-6 text-sm font-medium text-gray-900">
                  Michael Foster
                </h3>
                <dl class="mt-1 flex flex-grow flex-col justify-between">
                  <dt class="sr-only">Title</dt>
                  <dd class="text-sm text-gray-500">Co-Founder / CTO</dd>
                  <dt class="sr-only">Role</dt>
                  <dd class="mt-3">
                    <p class="text-sm italic text-gray-500">
                      “Lorem ipsum dolor sit amet consectetur adipisicing elit.
                      Voluptas consequatur, eaque tenetur corporis quisquam.”
                    </p>
                  </dd>
                </dl>
              </div>
            </li>

            <li class="col-span-1 flex flex-col divide-y divide-gray-200 rounded-lg bg-white text-center shadow">
              <div class="flex flex-1 flex-col p-8">
                <img
                  class="mx-auto h-32 w-32 flex-shrink-0 rounded-full"
                  src="https://images.unsplash.com/photo-1508214751196-bcfd4ca60f91?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=facearea&facepad=4&w=256&h=256&q=80"
                  alt=""
                />
                <h3 class="mt-6 text-sm font-medium text-gray-900">
                  Dries Vincent
                </h3>
                <dl class="mt-1 flex flex-grow flex-col justify-between">
                  <dt class="sr-only">Title</dt>
                  <dd class="text-sm text-gray-500">Business Relations</dd>
                  <dt class="sr-only">Role</dt>
                  <dd class="mt-3">
                    <p class="text-sm italic text-gray-500">
                      “Lorem ipsum dolor sit amet consectetur adipisicing elit.
                      Voluptas consequatur, eaque tenetur corporis quisquam.”
                    </p>
                  </dd>
                </dl>
              </div>
            </li>
          </ul>
        </div>
      </div>
    </div>
  );
}
