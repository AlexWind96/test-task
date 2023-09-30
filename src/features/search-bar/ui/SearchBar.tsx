import { FC, useCallback, useMemo, useState } from 'react'
import { useDebouncedValue, useLocalStorage } from '@mantine/hooks'
import { ILocation } from '@/shared/api'
import { useOnMarketPropertiesQuery, useSoldPropertiesQuery } from '../hooks'
import { SearchCombobox } from './SearchCombobox'
import { locationsMock } from './locations.mock.ts'

type ISearchBarProps = {}

export const SearchBar: FC<ISearchBarProps> = () => {
  const [searchValue, setValue] = useState('')
  const [debouncedValue] = useDebouncedValue(searchValue, 300)

  const { data: onMarketProperties } = useOnMarketPropertiesQuery({
    variables: { search: debouncedValue },
    enabled: debouncedValue.length > 2,
  })

  const { data: soldProperties } = useSoldPropertiesQuery({
    variables: { search: debouncedValue },
    enabled: debouncedValue.length > 2,
  })

  const [locations, setLocations] = useLocalStorage<ILocation[]>({
    key: 'locations',
    defaultValue: locationsMock,
  })

  const addLocation = useCallback((id: string) => {
    setLocations((locations) =>
      locations.map((loc) => {
        if (loc.id === id) {
          return {
            ...loc,
            selected: true,
          }
        } else {
          return loc
        }
      })
    )
  }, [])
  const removeLocation = useCallback((id: string) => {
    setLocations((locations) =>
      locations.map((loc) => {
        if (loc.id === id) {
          return {
            ...loc,
            selected: false,
          }
        } else {
          return loc
        }
      })
    )
  }, [])

  const selectedLocations = useMemo(() => {
    if (!locations) return []
    return locations.filter((loc) => loc.selected)
  }, [locations])

  const unselectedLocations = useMemo(() => {
    if (!locations) return []
    return locations.filter((loc) => !loc.selected)
  }, [locations])

  const handleSearchChange = useCallback((search: string) => {
    setValue(search)
  }, [])

  return (
    <SearchCombobox
      searchValue={searchValue}
      onSearchChange={handleSearchChange}
      onMarketProperties={onMarketProperties || []}
      soldProperties={soldProperties || []}
      locations={unselectedLocations}
      selectedLocations={selectedLocations}
      onLocationClick={addLocation}
      onLocationPillClick={removeLocation}
    />
  )
}
