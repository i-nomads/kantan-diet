module.exports = {
  respond,
};

function respond (res, tpl, obj, status) {
  res.format({
    json: () => {
      if (status) return res.status(status).json(obj);
      res.json(obj);
    }
  });
}

