
import AddCartButton from '@/components/AddCartButton';
// import { Redis } from 'ioredis';
import Link from 'next/link';
import { useRouter } from 'next/router';
import React from 'react'
export const getStaticPaths = async () => {
  // const res = await fetch(`http://localhost:3001/product`);
  // const data = await res.json();
  // const paths = data.map((x) => {
  //   return {
  //     params: {
  //       slug: x.id.toString(),
  //     }
  //   }
  // })
  return {
    paths: [],
    fallback: 'blocking',
  }
}
export const getStaticProps = async (context) => {
  // console.log('context', context)
  const id = context?.params?.slug;
  // console.log(id)
  const res = await fetch(`http://localhost:3001/product/${id}`);
  const data = await res.json();
  return {
    props: {
      data
    },
    revalidate: 10
  }
}

// const redis = new Redis();

// export const getStaticProps = async (context) => {
//   const id = context?.params?.slug;
//   // const redisKey = `product:${id}`;

//   // Check if data is in Redis
//   const cachedData = await redis.get(`productData?id=${id}`);

//   if (cachedData) {
//     console.log("id-redis")
//     // If data is found in Redis, return it
//     return {
//       props: {
//         data: JSON.parse(cachedData),
//       },
//       revalidate: 10, // You can keep revalidation as you had it
//     };
//   } else {
//     console.log("id-database")
//     // If data is not in Redis, fetch it from your API
//     const res = await fetch(`http://localhost:3001/product/${id}`);
//     const data = await res.json();

//     // Save the fetched data in Redis with a TTL (time-to-live)
//     await redis.setex(`productData?id=${id}`, 3600, JSON.stringify(data)); // Expires in 1 hour (adjust TTL as needed)

//     return {
//       props: {
//         data,
//       },
//       revalidate: 10,
//     };
//   }
// };

function Slug({ data }) {
  const router = useRouter()
  // function Slug() {
  //   let dispatch = useDispatch()
  //   useEffect(() => {
  //     dispatch(getproductApi())
  //   }, [])

  //   let user = useSelector(state => state.user.product)
  //   let router = useRouter()
  //   let id = router.query.slug
  //   let data = user?.find(x => x.id == id)
  // console.log('data', user)
  return (
    <div className='mt-5 pt-5'>
      <div className="container  py-5">
        <div className="card border-0" >
          <div className="row row-cols-1 row-cols-md-2 g-3 p-3 bg-opacity-10 bg-black">
            <div className="col bg-white rounded-2">
              <img width={200} height={500} className="card-img-top" style={{ objectFit: "contain" }} src={data?.img} alt="Card image cap " />
            </div>
            <div className="col">
              <div className="card-body">
                <h3 className="card-title">{data?.title}</h3>
                <div className='row mt-4'>
                  <h4 className=' col clr-orange'>{data?.price}/-</h4>
                  <AddCartButton data={data} />
                </div>
                <hr />
                <div className="text-secondary">
                  <h6>About Product</h6>
                  <ul className='fs-5'>
                    <li>Lorem ipsum dolor sit amet consectetur adipisicing elit. Quia, sunt.</li>
                    <li>Lorem ipsum dolor sit amet consectetur adipisicing.</li>
                    <li className='d-none d-lg-block'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Cum deleniti illum voluptatem harum, aut ex!</li>
                    <li className='d-none d-lg-block'>Lorem ipsum dolor sit amet consectetur, adipisicing elit. Eaque dolorum nulla officiis sed culpa? Architecto dolorum modi facilis perspiciatis aut!</li>
                    <li className='d-none d-lg-block'>Lorem ipsum dolor sit amet.</li>
                  </ul>
                  <p className="card-text">{data?.des}</p>
                  <div className="text-end">
                    {/* <a onClick={() => router.back()}>Back</a> ---redirect to back history */}
                    <Link href={`/${data?.types}`}>Back</Link>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Slug