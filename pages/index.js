import Head from 'next/head'
import Header from '@components/Header'
import Footer from '@components/Footer'

export default function Home() {
  return (
    <div className="container">
      <Head>
        <title>Next.js Starter!</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <main>
        <Header title="Welcome to my app!" />
        <p className="description">
          https://www.sandblast.in/product/zinc-wire, Zinc Wire is a great material decision for erosion security in both climatic and marine conditions. Utilizing either the electrical bend splash weapon or burning wire fire shower firearm, Zinc Spray Gun, Zinc Wire Coating of those materials go about as conciliatory anodes, galvanically ensuring amalgam or steel substrates. Many years of hands-on work utilizing these Zinc coatings have unmistakably exhibited that they are definitely more successful and longer-enduring than hot-plunge exciting.

Zinc Metalizing wire is a different strategy that melts Zinc or Zinc Alloy metals, and afterward quickly moves the liquid Zinc scraps onto a readied substrate, creating a lamellar or layered covering. Metalizing Spraying as it is frequently called is a profoundly proficient and demonstrated technique for consumption hindrance, giving galvanic just as boundary covering security to iron and steel.

Similarly, as with any covering cycle, the singular surface arrangement is fundamental. The impact grating utilized should clean the steel surface of old paint, rust, or factory scale and give a surface anchor tooth profile of about 2.0 to 4.0 mils (50-100 microns). This sort of planning is important to accomplish the mechanical obligation of zinc metalized covering. The outcome will be glue and firm power of a few thousand pounds for every square estimation between the substrate and the covering.

 
        </p>
      </main>

      <Footer />
    </div>
  )
}
