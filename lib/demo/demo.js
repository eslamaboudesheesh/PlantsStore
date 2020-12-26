export  const NavigationMock = () => {
    ///cms-api/navigation?lang=en
    return {
        topBarLinks: {
            mainLinks: [    // appears in top left side
                {
                    type: "content", // internal link that will open CMS static-content-page
                    url: "order-tracking",
                    icon: "location",
                    title: "Track your orders"
                },
                {
                    type: "internal", // internal link that will open dynamic page
                    url: "users/login",
                    icon: "users",
                    title: "Login"
                },
                {
                    type: "external",
                    url: "https://valu.com.eg/aboutus",
                    icon: "about-us",
                    title: "About Us"
                },
                {
                    type: "search", // internal link type, it will use the [url] as a search query in the listing page
                    url: "Cameras",
                    icon: null,
                    title: "Cameras"
                },
                {
                    type: "category", // internal link that will open a category page, I propose the below, but open for any ideas (links need to be generated in frontend)
                    url: null,
                    icon: null,
                    title: "Fans",
                    category: 1, // will use this ID to get the category alias and build the url
                    subcategory: null
                }
            ],
            secondaryLinks: [  // appears in top right side
                {
                    type: "internal",
                    url: "#deals",
                    icon: null,
                    title: "Daily Deals"
                },
            ]
        },
        mainMenuItems: [ // same as regular links
            {
                type: "internal",
                url: "order-tracking",
                icon: "location",
                title: "Track your orders"
            },
            {
                type: "category",
                url: null,
                icon: null,
                title: "Fans",
                category: 1,
                subcategory: null
            },
            {
                type: "category",
                url: null,
                icon: null,
                title: "Home Appliances",
                category: 1,
                subcategory: 4
            },
        ],
        footerSections: [ // sections can be dynamic with max 4 sections
            {
                title: "Popular Searches",
                items: [ // same as regular links
                    {
                        type: "search",
                        url: "Cameras",
                        icon: null,
                        title: "Cameras"
                    },
                    {
                        type: "search",
                        url: "Electronics",
                        icon: null,
                        title: "Electronics"
                    }
                ]
            },
            {
                title: "My Account",
                items: [
                    {
                        type: "search",
                        url: "Cameras",
                        icon: null,
                        title: "Cameras"
                    },
                    {
                        type: "search",
                        url: "Electronics",
                        icon: null,
                        title: "Electronics"
                    }
                ]
            }
        ]
    };
}

export  async function dataDemo ()  {
   
    const res = await fetch('https://jsonplaceholder.typicode.com/posts/1') .then(response => response.json())
    return res
}