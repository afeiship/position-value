type PositionValue = string | null;

const TRUTHY_WARN = 'rel/abs/fixed should only have one truthy value.';

export default (inProps): PositionValue => {
  const { rel, abs, fixed, sticky } = inProps;
  const props = [rel, abs, fixed, sticky];
  const valied = props.filter(Boolean);

  valied.length > 1 && console.warn(TRUTHY_WARN);

  if (rel) return 'relative';
  if (abs) return 'absolute';
  if (fixed) return 'fixed';
  if (sticky) return 'sticky';
  return null;
};
