# Aurora Hotels — სასტუმროს ჯავშნების პლატფორმა

Stack: React 18 · TypeScript · Vite · React Router v6 · Redux Toolkit · Formik · Yup · Framer Motion

## გაშვება
```bash
npm install
npm run dev      # http://localhost:5173
npm run build    # production build
```

## მარშუტები
| მისამართი | გვერდი |
|---|---|
| `/` | მთავარი |
| `/rooms` | ნომრების კატალოგი (useSelector) |
| `/rooms/:roomId` | ოთახის დეტალები + ჯავშნის ფორმა |
| `/add-room` | ოთახის დამატება (Formik + Yup + useDispatch) |

## Yup ვალიდაცია
- ოთახის ნომერი/დასახელება — string, required
- ფასი ღამეში — number, min(10)
- ტევადობა — number, min(1), max(10)

## სტრუქტურა
```
src/
  app/            store.ts, hooks.ts
  features/rooms/ roomsSlice.ts
  components/     Navbar, Footer, RoomCard, PageTransition
  pages/          Home, Rooms, RoomDetails, AddRoom, NotFound
```
