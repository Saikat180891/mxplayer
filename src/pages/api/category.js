const data = [
    {
        tabName: "ALL",
        movies: [
            {
                img: "https://awik.io/wp-content/uploads/2018/06/unsplash.jpg",
                title: "Some title"
            },
            {
                img: "https://awik.io/wp-content/uploads/2018/06/unsplash.jpg",
                title: "Some title"
            },
            {
                img: "https://awik.io/wp-content/uploads/2018/06/unsplash.jpg",
                title: "Some title"
            },
            {
                img: "https://awik.io/wp-content/uploads/2018/06/unsplash.jpg",
                title: "Some title"
            },
            {
                img: "https://awik.io/wp-content/uploads/2018/06/unsplash.jpg",
                title: "Some title"
            }
        ]
    },
    {
        tabName: "Movies",
        movies: [
            {
                img: "https://images.unsplash.com/photo-1641934150178-84e67031f36f?crop=entropy&cs=tinysrgb&fit=crop&fm=jpg&h=300&ixid=MnwxfDB8MXxyYW5kb218MHx8fHx8fHx8MTY0MjQxMTY1MQ&ixlib=rb-1.2.1&q=80&w=300g",
                title: "Some title"
            },
            {
                img: "https://images.unsplash.com/photo-1641934150178-84e67031f36f?crop=entropy&cs=tinysrgb&fit=crop&fm=jpg&h=300&ixid=MnwxfDB8MXxyYW5kb218MHx8fHx8fHx8MTY0MjQxMTY1MQ&ixlib=rb-1.2.1&q=80&w=300g",
                title: "Some title"
            },
            {
                img: "https://images.unsplash.com/photo-1641934150178-84e67031f36f?crop=entropy&cs=tinysrgb&fit=crop&fm=jpg&h=300&ixid=MnwxfDB8MXxyYW5kb218MHx8fHx8fHx8MTY0MjQxMTY1MQ&ixlib=rb-1.2.1&q=80&w=300g",
                title: "Some title"
            },
            {
                img: "https://images.unsplash.com/photo-1641934150178-84e67031f36f?crop=entropy&cs=tinysrgb&fit=crop&fm=jpg&h=300&ixid=MnwxfDB8MXxyYW5kb218MHx8fHx8fHx8MTY0MjQxMTY1MQ&ixlib=rb-1.2.1&q=80&w=300g",
                title: "Some title"
            },
            {
                img: "https://images.unsplash.com/photo-1641934150178-84e67031f36f?crop=entropy&cs=tinysrgb&fit=crop&fm=jpg&h=300&ixid=MnwxfDB8MXxyYW5kb218MHx8fHx8fHx8MTY0MjQxMTY1MQ&ixlib=rb-1.2.1&q=80&w=300g",
                title: "Some title"
            }
        ]
    },
    {
        tabName: "Channels",
        movies: [
            {
                img: "https://awik.io/wp-content/uploads/2018/06/unsplash.jpg",
                title: "Some title"
            },
            {
                img: "https://awik.io/wp-content/uploads/2018/06/unsplash.jpg",
                title: "Some title"
            },
            {
                img: "https://awik.io/wp-content/uploads/2018/06/unsplash.jpg",
                title: "Some title"
            },
            {
                img: "https://awik.io/wp-content/uploads/2018/06/unsplash.jpg",
                title: "Some title"
            },
            {
                img: "https://awik.io/wp-content/uploads/2018/06/unsplash.jpg",
                title: "Some title"
            }
        ]
    },
    {
        tabName: "Shows",
        movies: [
            {
                img: "https://awik.io/wp-content/uploads/2018/06/unsplash.jpg",
                title: "Some title"
            },
            {
                img: "https://awik.io/wp-content/uploads/2018/06/unsplash.jpg",
                title: "Some title"
            },
            {
                img: "https://awik.io/wp-content/uploads/2018/06/unsplash.jpg",
                title: "Some title"
            },
            {
                img: "https://awik.io/wp-content/uploads/2018/06/unsplash.jpg",
                title: "Some title"
            },
            {
                img: "https://awik.io/wp-content/uploads/2018/06/unsplash.jpg",
                title: "Some title"
            }
        ]
    },
    {
        tabName: "Videos",
        movies: [
            {
                img: "https://awik.io/wp-content/uploads/2018/06/unsplash.jpg",
                title: "Some title"
            },
            {
                img: "https://awik.io/wp-content/uploads/2018/06/unsplash.jpg",
                title: "Some title"
            },
            {
                img: "https://awik.io/wp-content/uploads/2018/06/unsplash.jpg",
                title: "Some title"
            },
            {
                img: "https://awik.io/wp-content/uploads/2018/06/unsplash.jpg",
                title: "Some title"
            },
            {
                img: "https://awik.io/wp-content/uploads/2018/06/unsplash.jpg",
                title: "Some title"
            }
        ]
    }
]

export default function handler(req, res) {
    res.status(200).json({ success: true, data })
}
