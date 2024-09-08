import Stack from 'react-bootstrap/Stack';

function VerticalExample() {
  return (
    <Stack gap={3}>
      <div className="p-2 primary">First item</div>
      <div className="p-2">Second item</div>
      <div className="p-2">Third item</div>
    </Stack>
  );
}

export default VerticalExample;