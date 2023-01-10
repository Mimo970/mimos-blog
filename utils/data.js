const data = {
  posts: [
    {
      id: 1,
      author: "Alex",
      category: ["Life", "Journey"],
      title: "first blog post",
      date: "1/7/2023",
      image:
        "https://images.unsplash.com/photo-1672761305319-ba79953d06ff?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxlZGl0b3JpYWwtZmVlZHw5fHx8ZW58MHx8fHw%3D&auto=format&fit=crop&w=600&q=60",
      body: "Lorem ipsum dolor sit amet, consectetur adipisicing elit.Lorem ipsum dolor sit amet, consectetur adipisicing elit. Porro sint asperiores ipsum consequatur qui libero accusamus cumque assumenda error, natus rerum, accusantium eos voluptas, voluptatem nobis aliquam ex ratione corrupti. Porro sint asperiores ipsum consequatur qui libero accusamus cumque assumenda error, natus rerum, accusantium eos voluptas, voluptatem nobis aliquam ex ratione corrupti.",
      bodySummary:
        "Lorem ipsum dolor sit amet, consectetur adipisicing elit.Lorem ipsum dolor sit amet,Lorem ipsum dolor sit amet, consectetur adipisicing elit.Lorem ipsum dolor sit amet,",
      // timeSincePosted: "1 hour ago",
    },
    {
      id: 2,
      author: "Bello",
      category: ["Music", "Life"],
      title: "second blog post",
      date: "1/7/2023",
      image:
        "https://images.unsplash.com/photo-1671725501844-1e6d0081bf64?ixlib=rb-4.0.3&ixid=MnwxMjA3fDF8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1470&q=80",
      body: "Lorem ipsum dolor sit amet, consectetur adipisicing elit.Lorem ipsum dolor sit amet, consectetur adipisicing elit. Porro sint asperiores ipsum consequatur qui libero accusamus cumque assumenda error, natus rerum, accusantium eos voluptas, voluptatem nobis aliquam ex ratione corrupti. Porro sint asperiores ipsum consequatur qui libero accusamus cumque assumenda error, natus rerum, accusantium eos voluptas, voluptatem nobis aliquam ex ratione corrupti.",
      bodySummary:
        "Lorem ipsum dolor sit amet, consectetur adipisicing elit.Lorem ipsum dolor sit amet,Lorem ipsum dolor sit amet, consectetur adipisicing elit.Lorem ipsum dolor sit amet,",
      // timeSincePosted: "1 hour ago",
    },
    {
      id: 3,
      author: "Mimo",
      category: ["Food", "Hobbies"],
      title: "dev blog post",
      date: "1/7/2023",
      image:
        "https://images.unsplash.com/photo-1672776309442-32d3299a9875?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=870&q=80",
      body: "Lorem ipsum dolor sit amet, consectetur adipisicing elit.Lorem ipsum dolor sit amet, consectetur adipisicing elit. Porro sint asperiores ipsum consequatur qui libero accusamus cumque assumenda error, natus rerum, accusantium eos voluptas, voluptatem nobis aliquam ex ratione corrupti. Porro sint asperiores ipsum consequatur qui libero accusamus cumque assumenda error, natus rerum, accusantium eos voluptas, voluptatem nobis aliquam ex ratione corrupti.",
      bodySummary:
        "Lorem ipsum dolor sit amet, consectetur adipisicing elit.Lorem ipsum dolor sit amet,Lorem ipsum dolor sit amet, consectetur adipisicing elit.Lorem ipsum dolor sit amet,",
      // timeSincePosted: "1 hour ago",
    },
    {
      id: 4,
      author: "Alexander",
      category: ["Passion", "Work"],
      title: "food app blog post",
      date: "1/7/2023",
      image:
        "https://plus.unsplash.com/premium_photo-1661922280898-85a2decd9167?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1470&q=80",
      body: "Lorem ipsum dolor sit amet, consectetur adipisicing elit.Lorem ipsum dolor sit amet, consectetur adipisicing elit. Porro sint asperiores ipsum consequatur qui libero accusamus cumque assumenda error, natus rerum, accusantium eos voluptas, voluptatem nobis aliquam ex ratione corrupti. Porro sint asperiores ipsum consequatur qui libero accusamus cumque assumenda error, natus rerum, accusantium eos voluptas, voluptatem nobis aliquam ex ratione corrupti.",
      bodySummary:
        "Lorem ipsum dolor sit amet, consectetur adipisicing elit.Lorem ipsum dolor sit amet,Lorem ipsum dolor sit amet, consectetur adipisicing elit.Lorem ipsum dolor sit amet,",
      // timeSincePosted: "1 hour ago",
    },
    {
      id: 5,
      author: "Julio",
      category: ["motivation", "goals"],
      title: "Mountain View",
      date: "1/7/2023",
      image:
        "https://images.unsplash.com/photo-1669375088527-1125d8ccbf70?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1931&q=80",
      body: "Lorem ipsum dolor sit amet, consectetur adipisicing elit.Lorem ipsum dolor sit amet, consectetur adipisicing elit. Porro sint asperiores ipsum consequatur qui libero accusamus cumque assumenda error, natus rerum, accusantium eos voluptas, voluptatem nobis aliquam ex ratione corrupti. Porro sint asperiores ipsum consequatur qui libero accusamus cumque assumenda error, natus rerum, accusantium eos voluptas, voluptatem nobis aliquam ex ratione corrupti.",
      bodySummary:
        "Lorem ipsum dolor sit amet, consectetur adipisicing elit.Lorem ipsum dolor sit amet,Lorem ipsum dolor sit amet, consectetur adipisicing elit.Lorem ipsum dolor sit amet,",
      timeSincePosted: "1 hour ago",
    },
    {
      id: 6,
      author: "Bello",
      category: ["art", "style"],
      title: "Working From Home",
      date: "1/7/2023",
      image:
        "https://images.unsplash.com/photo-1672831400079-127a63c19ec8?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1470&q=80",
      body: "Lorem ipsum dolor sit amet, consectetur adipisicing elit.Lorem ipsum dolor sit amet, consectetur adipisicing elit. Porro sint asperiores ipsum consequatur qui libero accusamus cumque assumenda error, natus rerum, accusantium eos voluptas, voluptatem nobis aliquam ex ratione corrupti. Porro sint asperiores ipsum consequatur qui libero accusamus cumque assumenda error, natus rerum, accusantium eos voluptas, voluptatem nobis aliquam ex ratione corrupti.",
      bodySummary:
        "Lorem ipsum dolor sit amet, consectetur adipisicing elit.Lorem ipsum dolor sit amet,Lorem ipsum dolor sit amet, consectetur adipisicing elit.Lorem ipsum dolor sit amet,",
      timeSincePosted: "1 hour ago",
    },
    {
      id: 7,
      author: "Mimo",
      category: ["architecture"],
      title: "Visiting Sweden",
      date: "1/7/2023",
      image:
        "https://images.unsplash.com/photo-1672833937157-1d13b2d803de?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1471&q=80",
      body: "Lorem ipsum dolor sit amet, consectetur adipisicing elit.Lorem ipsum dolor sit amet, consectetur adipisicing elit. Porro sint asperiores ipsum consequatur qui libero accusamus cumque assumenda error, natus rerum, accusantium eos voluptas, voluptatem nobis aliquam ex ratione corrupti. Porro sint asperiores ipsum consequatur qui libero accusamus cumque assumenda error, natus rerum, accusantium eos voluptas, voluptatem nobis aliquam ex ratione corrupti.",
      bodySummary:
        "Lorem ipsum dolor sit amet, consectetur adipisicing elit.Lorem ipsum dolor sit amet,Lorem ipsum dolor sit amet, consectetur adipisicing elit.Lorem ipsum dolor sit amet,",
      // timeSincePosted: "1 hour ago",
    },
    {
      id: 8,
      author: "Alexander",
      category: ["Life", "Art"],
      title: "Visiting Rome",
      date: "1/7/2023",
      image:
        "https://images.unsplash.com/photo-1671725779260-8d17bc0e3f8c?ixlib=rb-4.0.3&ixid=MnwxMjA3fDF8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1470&q=80",
      body: "Lorem ipsum dolor sit amet, consectetur adipisicing elit.Lorem ipsum dolor sit amet, consectetur adipisicing elit. Porro sint asperiores ipsum consequatur qui libero accusamus cumque assumenda error, natus rerum, accusantium eos voluptas, voluptatem nobis aliquam ex ratione corrupti. Porro sint asperiores ipsum consequatur qui libero accusamus cumque assumenda error, natus rerum, accusantium eos voluptas, voluptatem nobis aliquam ex ratione corrupti.",
      bodySummary:
        "Lorem ipsum dolor sit amet, consectetur adipisicing elit.Lorem ipsum dolor sit amet,Lorem ipsum dolor sit amet, consectetur adipisicing elit.Lorem ipsum dolor sit amet,",
      // timeSincePosted: "1 hour ago",
    },
  ],
};
export default data;
