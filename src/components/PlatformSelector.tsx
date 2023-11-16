import { Button, Menu, MenuButton, MenuItem, MenuList } from "@chakra-ui/react";
import { BsChevronDown } from "react-icons/bs";
import usePlatforms from "../hooks/usePlatforms";
import { Platform } from "../hooks/usePlatforms";

interface Props {
  onSelectPlatformId: (platformId: number) => void;
  selectedPlatformId?: number;
}

function PlatformSelector({
  onSelectPlatformId: onSelectPlatformId,
  selectedPlatformId: selectedPlatformId,
}: Props) {
  const { data, error } = usePlatforms();
  const selectedPlatform = data?.results.find(p => p.id === selectedPlatformId)

  if (error) return null;

  return (
    <Menu>
      <MenuButton as={Button} rightIcon={<BsChevronDown />}>
        {selectedPlatform?.name || "Platforms"}
      </MenuButton>
      <MenuList>
        {data?.results.map((platform) => (
          <MenuItem
            onClick={() => onSelectPlatformId(platform.id)}
            key={platform.id}
          >
            {platform.name}
          </MenuItem>
        ))}
      </MenuList>
    </Menu>
  );
}

export default PlatformSelector;
