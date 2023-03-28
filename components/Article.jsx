import styles from "../styles";

const Article = () => (
    <div className="mt-8 mx-4 grid grid-cols-1 gap-6 md:mt-16 md:grid-cols-2 md:gap-10 lg:grid-cols-3">
   
   <article className="overflow-hidden rounded-lg border border-gray-100 shadow-sm">
    <img
      alt="Office"
      src="https://images.unsplash.com/photo-1600880292203-757bb62b4baf?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1770&q=80"
      className="h-56 w-full object-cover"
    />
    <div className="p-4 sm:p-6 bg-white">
      <a href="#">
        <h3 className="text-lg font-medium text-gray-900">
          Lorem ipsum dolor sit amet consectetur adipisicing elit.
        </h3>
      </a>
      <p className="mt-2 text-sm leading-relaxed text-gray-500 line-clamp-3">
        Lorem ipsum dolor sit amet, consectetur adipisicing elit. Recusandae
        dolores, possimus pariatur animi temporibus nesciunt praesentium dolore
        sed nulla ipsum eveniet corporis quidem, mollitia itaque minus soluta,
        voluptates neque explicabo tempora nisi culpa eius atque dignissimos.
        Molestias explicabo corporis voluptatem?
      </p>
      <a
        href="#"
        className="group mt-4 inline-flex items-center gap-1 text-sm font-medium text-blue-600"
      >
        Find out more
        <span
          aria-hidden="true"
          className="block transition group-hover:translate-x-0.5"
        >
          →
        </span>
      </a>
    </div>
  </article>
  <article className="overflow-hidden rounded-lg border border-gray-100 shadow-sm">
    <img
      alt="Office"
      src="https://images.unsplash.com/photo-1600880292203-757bb62b4baf?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1770&q=80"
      className="h-56 w-full object-cover"
    />
    <div className="p-4 sm:p-6  bg-white">
      <a href="#">
        <h3 className="text-lg font-medium text-gray-900">
          Lorem ipsum dolor sit amet consectetur adipisicing elit.
        </h3>
      </a>
      <p className="mt-2 text-sm leading-relaxed text-gray-500 line-clamp-3">
        Lorem ipsum dolor sit amet, consectetur adipisicing elit. Recusandae
        dolores, possimus pariatur animi temporibus nesciunt praesentium dolore
        sed nulla ipsum eveniet corporis quidem, mollitia itaque minus soluta,
        voluptates neque explicabo tempora nisi culpa eius atque dignissimos.
        Molestias explicabo corporis voluptatem?
      </p>
      <a
        href="#"
        className="group mt-4 inline-flex items-center gap-1 text-sm font-medium text-blue-600"
      >
        Find out more
        <span
          aria-hidden="true"
          className="block transition group-hover:translate-x-0.5"
        >
          →
        </span>
      </a>
    </div>
  </article>
  <article className="overflow-hidden rounded-lg border border-gray-100 shadow-sm">
    <img
      alt="Office"
      src="https://images.unsplash.com/photo-1600880292203-757bb62b4baf?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1770&q=80"
      className="h-56 w-full object-cover"
    />
    <div className="p-4 sm:p-6 bg-white">
      <a href="#">
        <h3 className="text-lg font-medium text-gray-900">
          Lorem ipsum dolor sit amet consectetur adipisicing elit.
        </h3>
      </a>
      <p className="mt-2 text-sm leading-relaxed text-gray-500 line-clamp-3">
        Lorem ipsum dolor sit amet, consectetur adipisicing elit. Recusandae
        dolores, possimus pariatur animi temporibus nesciunt praesentium dolore
        sed nulla ipsum eveniet corporis quidem, mollitia itaque minus soluta,
        voluptates neque explicabo tempora nisi culpa eius atque dignissimos.
        Molestias explicabo corporis voluptatem?
      </p>
      <a
        href="#"
        className="group mt-4 inline-flex items-center gap-1 text-sm font-medium text-blue-600"
      >
        Find out more
        <span
          aria-hidden="true"
          className="block transition group-hover:translate-x-0.5"
        >
          →
        </span>
      </a>
    </div>
  </article>
  </div>

);

export default Article