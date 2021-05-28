type PositionValue = string | null;

const TRUTHY_WARN = 'rel/abs/fixed should only have one truthy value.';

export default (inProps): PositionValue => {
  const { rel, relative, abs, fixed, sticky } = inProps;
  const props = [rel, relative, abs, fixed, sticky];
  const valid = props.filter(Boolean);

  valid.length > 1 && console.warn(TRUTHY_WARN);

  if (rel || relative) return 'relative';
  if (abs) return 'absolute';
  if (fixed) return 'fixed';
  if (sticky) return 'sticky';
  return null;
};
