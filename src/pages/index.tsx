import { NextPage } from 'next'
import {getFeaturedEvents} from '../../dummy-data'
import EventList from '@/components/events/eventList'
import {EventData} from '../types/props'

const HomePage: NextPage = () => {
  const featuredEvent:EventData[] =getFeaturedEvents()

  return <div>
    <EventList items={featuredEvent}/>
  </div>
}

export default HomePage